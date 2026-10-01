const store = require('./store');
let nextId = 1;

const getAll = (weekday) => {
    if (weekday) return store.filter(l => l.weekday === weekday);
    return store;
};

const getById = (id) => store.find(l => l.id === id);

const create = (data) => {
    if (checkOverlap(data.weekday, data.startTime, data.endTime)) {
    throw new Error('Занятие пересекается по времени с уже существующим в этот день');
    }

    const newLesson = { id: nextId++, ...data };
    store.push(newLesson);
    return newLesson;
};

const update = (id, data) => {
    const index = store.findIndex(l => l.id === id);
    if (index === -1) return null;

    const updatedLesson = { ...store[index], ...data };
    if (checkOverlap(updatedLesson.weekday, updatedLesson.startTime, updatedLesson.endTime, id)) {
        throw new Error('Занятие пересекается по времени с уже существующим в этот день');
    }

    store[index] = updatedLesson;
    return store[index];
};

const remove = (id) => {
    const index = store.findIndex(l => l.id === id);
    if (index === -1) return false;
    store.splice(index, 1);
    return true;
};

const checkOverlap = (weekday, startTime, endTime, excludeId = null) => {
    return store.some(l => {
        if (excludeId && l.id === excludeId) return false; 
        if (l.weekday !== weekday) return false;
        return startTime < l.endTime && l.startTime < endTime;
    });
};

module.exports = { getAll, getById, create, update, remove };