import { Random } from "./components/Random";
import { Tag } from "./components/Tag";

export default function App() {
    return (
        <div className="w-full h-screen flex flex-col background items-center">
            <h1 className="bg-white rounded-lg text-center w-11/12 mt-[40px] mx-auto px-10 py-2 text-3xl font-bold">
                RANDOM GIFS
            </h1>
            <div className="flex flex-col w-full items-center">
                <Random />
                <Tag />
            </div>
        </div>
    );
}
