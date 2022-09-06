// 47. Рекурсия

let student = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress:10
        }],

        semi: {
            studenty: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

// нужно посчитать среднее от progress всех студентов
// 1. с помощью цикла
function getTotalProgressByIteretion(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) { // Object.values() - возвращает массив только значений свойств объекта
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                } 
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteretion(student));

// 2. с помощью рекурсии
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData); // вот рекурсия - ф-я вызывает сама себя столько раз сколько надо для окончания процесса
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(student);

console.log(result[0] / result[1]);