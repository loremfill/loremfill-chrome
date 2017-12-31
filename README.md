## Lorem Fill
#### Fill context specific random test data into forms

[![Code Climate](https://codeclimate.com/github/loremfill/loremfill-chrome/badges/gpa.svg)](https://codeclimate.com/github/loremfill/loremfill-chrome)

A Google Chrome extension to fill random test data into web forms. The extension attempts to fill context specific data for each field. If no decision can be made, the extension fills a random sentence as the value of the field.

#### Testing

```
python -m SimpleHTTPServer 8000
```
- Open `http://localhost:8000/test/page.html` in Chrome
- Run the extension via the button
- Run via keyboard shortcut
- Run it on a single element by using context menu
