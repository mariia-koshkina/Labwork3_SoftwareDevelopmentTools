# C++ Include Cleaner README

Лабораторная работа №3. Разработка расширения для Visual Studio Code.  
Автор: Кошкина Мария Вячеславовна  
Группа: М3106  

## Описание

Плагин C++ Include Cleaner — это расширение для Visual Studio Code, предназначенное для автоматического удаления неиспользуемых директив #include в файлах C++.

Плагин анализирует открытый C++-файл, определяет, какие заголовочные файлы (#include <...> или #include "...") не используются в коде, и удаляет их. Это ускоряет время компиляции и повышает "чистоту" кода.


## Функционал
1. При вызове команды (Ctrl+Shift+P → Hello World) плагин получает содержимое активного файла.
2. Все комментарии удаляются для корректного парсинга
3. Проверка использования подкюченных директив
4. Удаление неиспользуемых, но подключенных библиотек из исходного файла
5. Уведомление пользователя об изменениях

Пример:

Было:
```cpp
#include <vector>
#include <iostream>
#include <string>
#include <cmath>

int main() {
    std::string s = "Hello World";
    std::cout << s;
    return 0;
}
```   

Стало:
```cpp
#include <iostream>
#include <string>


int main() {
    std::string s = "Hello World";
    std::cout << s;
    return 0;
}
```   


## Ограничения
1. Не учитывает using namespace std; — плагин ищет только полные имена вида std::vector
2. Поддерживает только С++


## Установка плагина
1. Установите Visual Studio Code, Node.js, npm
2. Клонируйте репозиторий ```git clone https://github.com/mariia-koshkina/Labwork3_SoftwareDevelopmentTools.git
3. Откройте папку проекта cpp-include-cleaner и скомпилируйте
4. Нажмите F5, откройте файл с кодом для использования плагина
5. Нажмите Ctrl+Shift+P и выберите программу Hello World
6. После выполнения работы плагина остановите программу


## Используемые инструменты для разработки  
Язык разработки: TypeScript  
Платформа: Visual Studio Code (1.106.2)  
Другие инструменты:   
Node.js   
npm (Node Package Manager)  
yo code — генератор расширений VS Code  


**Хорошего использования!**
