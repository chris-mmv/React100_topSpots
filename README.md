# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Page layout:
-Header area
-Title: “San Diego Top Spots”
-Subtitle text

    -Content area
        -A list of 30 spots (each as a “card” or “row”)
            -Name
            -Description
            -“Open in Google Maps” link/button

Component tree:
<App /> (container)
-owns state: topspots
-owns data fetching (useEffect)
-renders header
-renders <TopSpots spots={topspots} />

<TopSpots /> (list of items)
-receives spots prop
-loops and renders <TopSpot ... /> for each

<TopSpot /> (selected item)
-receives name, description, location
-renders UI + Google Maps link
