import { serverRouteAdapter } from "./app";

const PORT = 3000;
serverRouteAdapter.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
