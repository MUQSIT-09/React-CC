# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values