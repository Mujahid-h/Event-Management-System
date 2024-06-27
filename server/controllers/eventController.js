import Event from "../models/eventModel.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEventsById = async (req, res) => {
  try {
    const { id } = req.params;
    const events = await Event.findById(id);
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createEvent = async (req, res) => {
  const { name, date, location, description } = req.body;

  try {
    const newEvent = new Event({
      name,
      date,
      location,
      description,
    });

    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, date, location, description } = req.body;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    event.name = name;
    event.date = date;
    event.location = location;
    event.description = description;

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
