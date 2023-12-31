//Эта переменная определяет количество элементов, которые нужно показывать
//в десктопной версии (широком экране) при использовании функционала "Показать ещё".
// Значение равно 3, что означает, что при нажатии на кнопку "Показать ещё" будет
//отображаться дополнительно 3 элемента карточек.
const DESKTOP_ITEMS_PER_LOAD = 3
//Эта переменная определяет количество элементов, которые нужно показывать
// в версии для планшетов при использовании функционала "Показать ещё". Значение
// равно 2, что означает, что при нажатии на кнопку "Показать ещё" будет
// отображаться дополнительно 2 элемента карточек.
const TABLET_ITEMS_PER_LOAD = 2
//Эта переменная определяет количество элементов, которые нужно показывать в мобильной
//версии при использовании функционала "Показать ещё". Значение также равно 2, что
// означает, что при нажатии на кнопку "Показать ещё" будет отображаться дополнительно
//  2 элемента карточек.
const MOBILE_ITEMS_PER_LOAD = 2
//Эта переменная определяет значение, которое используется в фильтре длительности
// фильмов. Значение равно 40, что означает, что фильмы с длительностью менее 40 минут
// будут считаться короткими. Это значение используется, например, в функции filterDuration,
// где фильмы с длительностью меньше MAX_SHORT_DURATION отфильтровываются и возвращается только список коротких фильмов.
const MAX_SHORT_DURATION = 40

//Комментарий // eslint-disable-next-line no-useless-escape используется для
//временного отключения проверки линтера ESLint для следующей строки кода.
//В данном случае, комментарий указывает ESLint игнорировать предупреждение о "бесполезном использовании
// экранирования" (no-useless-escape) для строки кода, которая содержит регулярное выражение.

//Регулярные выражения часто используют экранирование символов, и иногда линтеры
// могут предупреждать о "бесполезном" экранировании, когда экранирование символов
// не является необходимым. Если вы уверены, что экранирование в данном случае является нужным
// и правильным, вы можете использовать этот комментарий, чтобы временно отключить проверку для данной строки кода.

// eslint-disable-next-line no-useless-escape

//// Регулярное выражение для проверки корректности формата email адреса.
// Оно соответствует стандартным требованиям для email адресов и включает следующие правила:
// - Адрес может содержать только латинские буквы (в любом регистре), цифры и специальные символы: . _ % + -
// - Имя пользователя (левая часть адреса) может содержать один или более символов из разрешенного набора
// - Имя домена (правая часть адреса) может содержать один или более символов из разрешенного набора
// - Имя домена должно содержать точку перед именем домена верхнего уровня (TLD)
// - Имя домена верхнего уровня (TLD) может состоять только из латинских букв и должно состоять минимум из двух символов

const EMAIL_PATTERN = "[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}"

//это регулярное выражение, используемое для проверки корректности
// формата имени пользователя. Оно позволяет использовать только буквы
// латинского и кириллического алфавита, а также пробелы и дефисы. Это
// позволяет пользователю вводить свое имя, используя только допустимые символы.
const USERNAME_PATTERN = "^[A-Za-zА-Яа-яЁё /s -]+$"

//Экспорт констант в другие части приложения
export {
  DESKTOP_ITEMS_PER_LOAD,
  TABLET_ITEMS_PER_LOAD,
  MOBILE_ITEMS_PER_LOAD,
  MAX_SHORT_DURATION,
  EMAIL_PATTERN,
  USERNAME_PATTERN,
}
