## Toast

A standalone JavaScript library for creating customizable, dismissable toast notifications.

## Installation

Include the `toast.js` file in your project and create a new instance of the `Toast` class.

```js
<script src="path/to/toast.js"></script>
<script>
  const toast = new Toast();
</script>
```

## Usage

### Showing a Toast

To show a toast, call the `show()` method on the Toast instance and pass in an options object.

```js
toast.show({
    text: "Hello World",
    position: "top",
    duration: 3000,
    styles: {
        backgroundColor: "red",
        color: "white",
        fontSize: "20px"
    },
    animations: {
        slideIn: "1s"
    },
    fonts: {
        fontFamily: "Arial"
    }
});
```

### Removing a Toast

To remove a specific toast, call the `remove()` method on the Toast instance and pass in the toast element as an argument.

```js
toast.remove(toastElement);
```

### Removing All Toasts

To remove all toasts, call the `removeAll()` method on the Toast instance.

```js
toast.removeAll();
```
### Configuration

The options object passed to the `show()` method can include the following properties:

<ul><li><code>text</code> (string): The text to display in the toast (default: "Toast text").</li><li><code>position</code> (string): The position of the toast. Available options are "top", "bottom", "center", "left" and "right" (default: "bottom").</li><li><code>duration</code> (number): The duration in milliseconds for which the toast should be displayed (default: 3000).</li><li><code>onClose</code> (function): A callback function that is invoked when the toast is closed (default: null).</li><li><code>styles</code> (object): An object containing custom CSS styles to be applied to the toast (default: {}).</li><li><code>animations</code> (object): An object containing custom CSS animations to be applied to the toast (default: {}).</li><li><code>fonts</code> (object): An object containing custom fonts to be applied to the toast (default: {}).</li></ul>

### Example
```js
const toast = new Toast();
toast.show({
    text: "Hello World",
    position: "top",
    duration: 3000,
    styles: {
        backgroundColor: "red",
        color: "white",
        fontSize: "20px"
    },
    animations: {
        slideIn: "1s"
    },
    fonts: {
        fontFamily: "Arial"
    }
});
```
This will create a new toast with the text "Hello World" and position it on the top of the screen and it will be removed after 3000ms. Also the toast will slide in from 1s with custom background color, color and font size and font family.

### Browser Support

This library uses `querySelector` and `appendChild` which are supported by all modern browsers.

### License

<p>This library is released under the <a href="https://opensource.org/licenses/MIT" target="_new">MIT license</a></p>

### Conclusion

The Toast class provides a simple and flexible way to create and manage toast notifications in your web application. It allows you to easily customize the look, position and behavior of the toasts, and provides methods for showing, hiding and removing toasts.

Hope this library will be helpful for you.
