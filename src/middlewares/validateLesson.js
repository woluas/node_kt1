const validateLesson = (req, res, next) => {
    const { weekday, startTime, endTime } = req.body;
    const validDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    if (!weekday || !validDays.includes(weekday)) {
        return res.status(400).json({ error: 'weekday должен быть пн, вт, ср, чт, пт, сб или вс' });
    }
    if (!startTime || !/^\d{2}:\d{2}$/.test(startTime)) {
        return res.status(400).json({ error: 'startTime должен быть в формате ЧЧ:ММ' });
    }
    if (!endTime || !/^\d{2}:\d{2}$/.test(endTime)) {
        return res.status(400).json({ error: 'endTime должен быть в формате ЧЧ:ММ' });
    }
    if (startTime >= endTime) {
        return res.status(400).json({ error: 'startTime должен быть строго меньше endTime' });
    }

    next();
    };

module.exports = validateLesson;