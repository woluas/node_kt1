const store = require('./services/store');

const seed = () => {
    const N = 5; 

    const initialLessons = [
        { id: 1, weekday: 'пн', startTime: '10:00', endTime: '11:30' },
        { id: 2, weekday: 'пн', startTime: '12:00', endTime: '13:00' },
        { id: 3, weekday: 'ср', startTime: '14:00', endTime: '15:30' },
        { id: 4, weekday: 'пт', startTime: '09:00', endTime: '10:30' },
        { id: 5, weekday: 'сб', startTime: '11:00', endTime: '12:00' },
        { id: 6, weekday: 'вс', startTime: '10:00', endTime: '11:00' },
        { id: 7, weekday: 'вт', startTime: '16:00', endTime: '17:00' },
        { id: 8, weekday: 'чт', startTime: '18:00', endTime: '19:00' }
    ];

    store.push(...initialLessons.slice(0, N));
    console.log(`Добавлено ${N} стартовых записей`);
};

module.exports = { seed };