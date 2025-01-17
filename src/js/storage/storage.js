import storageConfig from '../constants/storage-config';

// Запись, удаление и получение данных из хранилища
// getStorage() принимает ключ и возвращает распаршенный массив.
//
// setStorage() принимает ключ, значение. Ищет данные по ключу,
// если они есть то вытягивает их, добавляет новое значение в массив и записывает обратно.
// если нету, то добавляет значение в массив и записывает в хранилище.
//
// deleteStorage() принимает ключ, значение.Ищет данные по ключу,
// если они есть то вытягивает их, удаляет значение из массива и записывает обратно.
// если нету, то добавляет значение в массив и записывает в хранилище.
