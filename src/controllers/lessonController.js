const lessonService = require('../services/lessonService');

const getAll = (req, res, next) => {
    try {
        res.status(200).json(lessonService.getAll(req.query.weekday));
    } catch (err) { next(err); }
};

const getById = (req, res, next) => {
    try {
        const lesson = lessonService.getById(Number(req.params.id));
        if (!lesson) return res.status(404).json({ error: 'Занятие не найдено' });
        res.status(200).json(lesson);
    } catch (err) { next(err); }
};

const create = (req, res, next) => {
    try {
        const newLesson = lessonService.create(req.body);
        res.status(201).json(newLesson);
    } catch (err) { next(err); }
};

const update = (req, res, next) => {
    try {
        const updated = lessonService.update(Number(req.params.id), req.body);
        if (!updated) return res.status(404).json({ error: 'Занятие не найдено' });
        res.status(200).json(updated);
    } catch (err) { next(err); }
};

const patch = (req, res, next) => {
    try {
        const updated = lessonService.update(Number(req.params.id), req.body);
        if (!updated) return res.status(404).json({ error: 'Занятие не найдено' });
        res.status(200).json(updated);
    } catch (err) { next(err); }
};

const remove = (req, res, next) => {
    try {
        const removed = lessonService.remove(Number(req.params.id));
        if (!removed) return res.status(404).json({ error: 'Занятие не найдено' });
        res.status(204).send(); 
    } catch (err) { next(err); }
};

module.exports = { getAll, getById, create, update, patch, remove };