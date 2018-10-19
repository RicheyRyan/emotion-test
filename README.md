# Reproduction
The issue I'm having is I have emotion styled components in a component library.

I use the `create-emotion` to add a key which namespaces my components.

I import the component library into my app. Due to the nature of my app, I have to create an iframe and load my components inside.

Because `create-emotion` is wrapped inside my component library I cannot pass it the `container` param for my iframe.

The workaround I reached was taking all the CSS from the namespaced style tags inserted into the head and passing them into the iframe.

This works ok when running Create React App locally. When you run the Create React App build, the CSS is no longer put in the namespaced style tags in the head.

Because of this the styles no longer make it into the iframe.

## Steps to reproduce
- Run `npm i` in the `app` and `component-library` directories
- Run `npm run build:babel` in the `component-library` directory
- Run `npm run start` in the `app` directory
- Observe the components loading with their style in and out of the iframe
- Run `npm run build` in the `app` directory
- Install the `serve` package with `npm i -g serve`
- Run `serve -s build` and go to `localhost:5000`
- Observe the components rendering properly in the parent frame but not child frame
- Observe the namespaced style tag without the CSS inside
