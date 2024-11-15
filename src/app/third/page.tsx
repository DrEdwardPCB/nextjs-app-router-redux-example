//part of it is SSR while starting from Provider is clientSide Rendered
import C1 from "@/component/c1";
import StoreProvider from "../storeProvider";

export default async function Page3(){
    return (<div>
        <h1>this is page3</h1>
        <StoreProvider>
            <C1/>
        </StoreProvider>
    </div>)
}