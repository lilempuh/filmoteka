// 1 Сделать пустой обьект genresHash и записать
// в него жанры в таком виде { id: name }, с бекенда используя getGenres().
// информация должна попадать в обьект при открытии страницы и храниться на протяжении всего сеанса.(не делать каждый раз запрос)
//
// 2 експортировать функцию getNameGenres которая принимает массив IDs,
//  берет название жанра из обьекта genresHash и возвращает
//  строку жанров в виде Action, Comedy.
// Если жанров больше чем 2, то добавляет в конец Other.
// нужно сделать доп проверки, если массив пустой(нету жанров у фильма) возвращается строка N/A.
// Может не быть жанра с тем ID что пришел с бека, нужно тоже сделать проверку, что бы не записать undefined в строку.
