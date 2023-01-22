# Spanish Messages for React-Admin

Spanish messages for [react-admin](https://github.com/marmelab/react-admin).

## Installation

```sh
npm install --save @benjujo/ra-language-spanish
```

## Usage

```jsx
import { Admin } from 'react-admin';
import spanishMessages from '@benjujo/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';
const messages = {
    'es': spanishMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);
<Admin locale="es" i18nProvider={i18nProvider}>
    ...
</Admin>
```

## License

This translation is licensed under the MIT License.
