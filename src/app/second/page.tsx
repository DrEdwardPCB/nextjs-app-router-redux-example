//part of it is SSR while starting from Provider is clientSide Rendered
import C2 from "@/component/c2";
import StoreProvider from "../storeProvider";

export default async function Page2(){
    return (<div>
        <h1>this is page2</h1>
        <StoreProvider>
            <C2/>
        </StoreProvider>
    </div>)
}