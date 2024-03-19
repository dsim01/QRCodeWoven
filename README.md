# QrCodeWoven

The `QrCodeWoven` is a React component based on [qrious package](https://github.com/neocotic/qrious) that allows for easy generation of QR codes within your React applications.
It provides the flexibility to generate qr codes as either canvas elements or images, customizable with a variety of options to fit the needs of your application.

## Installation

Ensure you have React installed. Then, integrate the `QrCodeWoven` component into your project by placing it in your components directory or wherever you manage external libraries.

Installation with npm

```npm
npm install qr-code-woven
```

Installation with yarn

```npm
yarn add qr-code-woven
```

Installation with pnpm

```npm
pnpm add qr-code-woven
```

## Usage

First, import the `QrCodeWoven` component into your React component file where you intend to display the QR code.

```jsx
import { QrCodeWoven } from 'qr-code-woven';
```

Then, you can use the `QrCodeWoven` component within your component's render method or function component return statement. Here is a basic example:

```jsx
const YourComponent = () => {
  return (
    <QrCodeWoven
      type='canvas'
      value='https://example.com'
      options={{
        background: '#eaeaea',
        backgroundAlpha: 1,
        foreground: 'black',
        foregroundAlpha: 1,
        level: 'L',
        mime: 'image/png',
        padding: 25,
        size: 100,
      }}
    />
  );
};
```

## Props

The QrCodeWoven component accepts the following props:

- `value` (String): The value you wish to encode within the QR code. This is typically a URL or any text.
- `type` (String): Determines the type of QR code to generate. Options are canvas or image.
- `options` (Object): A set of options to customize the QR code's appearance and functionality. These options are passed directly to QRious and include:
  - `background` (String): The background color of the QR code. Defaults to "white".
  - `backgroundAlpha` (Number): The background alpha (transparency) of the QR code. Defaults to 1.0.
  - `foreground` (String): The foreground color of the QR code. Defaults to "black".
  - `foregroundAlpha` (Number): The foreground alpha (transparency) of the QR code. Defaults to 1.0.
  - `level` (String): The error correction level of the QR code. Options are L, M, Q, H. Defaults to "L".
  - `mime` (String): The MIME type used to render the image for the QR code. Defaults to "image/png".
  - `padding` (Number): The padding around the QR code in pixels. A null value defaults to automatic padding.
  - `size` (Number): The size of the QR code in pixels. Defaults to 100.

For more detailed information on the options, refer to the [QRious API reference](https://github.com/neocotic/qrious?tab=readme-ov-file#api).

## License

See [LICENSE.md](./LICENSE.md) for more information on our MIT license.

This project uses a library called `qrious` licensed under the GNU GPLv3.
For more information, follow the link: https://github.com/neocotic/qrious.
