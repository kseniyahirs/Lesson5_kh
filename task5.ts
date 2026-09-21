// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

const addZero = (num: number): string => num.toString().padStart(2, "0");

const getDate = (dateString: string): void => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.log("Ошибка: Передана некорректная дата!");
    return;
  }
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1); // +1, так как месяцы в JS начинаются с 0
  const year = date.getFullYear();
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  console.log(formattedDate);
};

getDate("2026-10-22T22:10:15");
