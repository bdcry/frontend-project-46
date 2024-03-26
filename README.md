# Тесты


[![Actions Status](https://github.com/bdcry/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/bdcry/frontend-project-46/actions)<span style="font-size: 18px;"> - Hexlet tests and linter status.</span>


[![Maintainability](https://api.codeclimate.com/v1/badges/79d7abfeda73473a7edf/maintainability)](https://codeclimate.com/github/bdcry/frontend-project-46/maintainability) <span style="font-size: 18px;"> - Оценка Maintainability от Codeclimate.</span>


[![Test Coverage](https://api.codeclimate.com/v1/badges/79d7abfeda73473a7edf/test_coverage)](https://codeclimate.com/github/bdcry/frontend-project-46/test_coverage) <span style="font-size: 18px;"> - Процент Test Coverage от Codeclimate.</span>

# учебный проект от Hexlet - Вычислитель отличий
# Описание
Это второй учебный проект от Hexlet - Вычислитель отличий.
Программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

# Возможности утилиты:
<dl>
    <dt style="font-weight: bold;">Поддержка разных входных форматов:</dt>
    <dd>
        <ul>
            <li>YAML</li>
            <li>JSON</li>
        </ul>
    </dd>
    <dt style="font-weight: bold;">Генерация отчета в видe:</dt>
    <dd>
        <ul>
            <li>Plain Text</li>
            <li>Stylish</li>
            <li>JSON</li>
        </ul>
    </dd>
</dl>

# Установка
<ol>
    <li>Склонировать репозиторий</li>
    <li>Выполнить команду make install</li>
</ol>

```
git clone git@github.com:bdcry/frontend-project-46.git
cd frontend-project-46/
make install
```
[![asciicast](https://asciinema.org/a/RSefK50qoxnmyoZcZKJNwCPYF.svg)](https://asciinema.org/a/RSefK50qoxnmyoZcZKJNwCPYF)

## Демонстрация 
<table style="width: 100%;">
    <tr>
        <th style="width: 100%;font-size: 25px;font-weight: bold;text-align: center;">Сравнение плоских файлов (JSON)</th>
    </tr>
        <tr>
        <td style="width: 100%;">
          <a href="https://asciinema.org/a/WB6V33mDWdBzqhCdkSC5dlW7f" target="_blank"><img src="https://asciinema.org/a/WB6V33mDWdBzqhCdkSC5dlW7f.svg" /></a>
        </td>
    </tr>
</table>
<table style="width: 100%;">
    <tr>
        <th style="width: 100%;font-size: 25px;font-weight: bold;text-align: center;">Сравнение плоских файлов (YAML)</th>
    </tr>
        <tr>
        <td style="width: 100%;">
            <a href="https://asciinema.org/a/IVBEmDYiEzVVrRVlQEuQnCrl8" target="_blank"><img src="https://asciinema.org/a/IVBEmDYiEzVVrRVlQEuQnCrl8.svg" /></a>
        </td>
    </tr>
</table>
<table style="width: 100%;">
    <tr>
        <th style="width: 100%;font-size: 25px;font-weight: bold;text-align: center;">Сравнение вложенных файлов (JSON | YAML)</th>
    </tr>
        <tr>
        <td style="width: 100%;">
            <a href="https://asciinema.org/a/gEbavZkavWg1j1qqSzOaAu9eG" target="_blank"><img src="https://asciinema.org/a/gEbavZkavWg1j1qqSzOaAu9eG.svg" /></a>
        </td>
    </tr>
</table>
<table style="width: 100%;">
    <tr>
        <th style="width: 100%;font-size: 25px;font-weight: bold;text-align: center;">Сравнение вложенных файлов (Plain) (JSON | YAML)</th>
    </tr>
        <tr>
        <td style="width: 100%;">
            <a href="https://asciinema.org/a/12wIChMkIzqvp5TVfDzpU4Oi2" target="_blank"><img src="https://asciinema.org/a/12wIChMkIzqvp5TVfDzpU4Oi2.svg" /></a>
        </td>
    </tr>
</table>
<table style="width: 100%;">
    <tr>
        <th style="width: 100%;font-size: 25px;font-weight: bold;text-align: center;">Сравнение вложенных файлов (JSON) (JSON | YAML)</th>
    </tr>
        <tr>
        <td style="width: 100%;">
            <a href="https://asciinema.org/a/inVN6w8asX6TkadsPVA9srqyy" target="_blank"><img src="https://asciinema.org/a/inVN6w8asX6TkadsPVA9srqyy.svg" /></a>
        </td>
    </tr>
</table>