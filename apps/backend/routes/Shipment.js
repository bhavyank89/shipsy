import { Router } from "express";
import Shipment from "../models/Shipment.js";
import auth from "../middleware/auth.js";

const router = Router();

// Apply auth middleware to all shipment routes
router.use(auth);

/**
 * GET /shipments
 * Query params:
 * - page, limit
 * - status, fragile, search
 * - sort: field:asc|desc
 */
router.get("/", async (req, res) => {
    try {
        const {
            page = 1,
            limit = 5,
            status,
            fragile,
            search,
            sort = "createdAt:desc",
        } = req.query;

        const query = {};
        if (status) query.status = status;
        if (fragile) query.fragile = fragile === "true";
        if (search) query.title = { $regex: search, $options: "i" };

        const skip = (Number(page) - 1) * Number(limit);
        const total = await Shipment.countDocuments(query);

        // Sorting
        let sortObj = {};
        if (sort) {
            const [field, dir] = sort.split(":");
            sortObj[field] = dir === "asc" ? 1 : -1;
        }

        const shipments = await Shipment.find(query)
            .sort(sortObj)
            .skip(skip)
            .limit(Number(limit));

        res.json({
            data: shipments,
            total,
            page: Number(page),
            totalPages: Math.ceil(total / limit),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * GET /shipments/:id
 */
router.get("/:id", async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        if (!shipment) return res.status(404).json({ message: "Shipment not found" });
        res.json(shipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * POST /shipments
 */
router.post("/", async (req, res) => {
    try {
        const shipment = new Shipment(req.body);
        await shipment.save();
        res.status(201).json(shipment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * PATCH /shipments/:id
 */
router.patch("/:id", async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        if (!shipment) return res.status(404).json({ message: "Shipment not found" });

        Object.assign(shipment, req.body);
        shipment.cost = shipment.weightKg * shipment.baseRate + shipment.distanceKm * 0.5;

        await shipment.save();
        res.json(shipment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * DELETE /shipments/:id
 */
router.delete("/:id", async (req, res) => {
    try {
        const shipment = await Shipment.findByIdAndDelete(req.params.id);
        if (!shipment) return res.status(404).json({ message: "Shipment not found" });
        res.json({ message: "Shipment deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
