import { useState, lazy, Suspense } from 'react';

const Tab1 = lazy(() => import('../helperComps/Tab1'));
const Tab2 = lazy(() => import('../helperComps/Tab2'));
const Tab3 = lazy(() => import('../helperComps/Tab3'));

function LazyTab() {
    const [active, setActive] = useState('tab1');
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <section className="justify-between items-center  flex flex-col w-[600px] space-y-3">
                <h1 className="text-2xl font-bold text-center">Lazy Loading</h1>

                <div className="justify-between items-center  flex w-[400px] p-3 bg-white rounded-xl shadow-lg ">
                    <button
                        className="flex-1 text-center cursor-pointer"
                        onClick={() => setActive('tab1')}
                    >
                        Tab 1
                    </button>
                    <button
                        className="flex-1 text-center cursor-pointer"
                        onClick={() => setActive('tab2')}
                    >
                        Tab 2
                    </button>
                    <button
                        className="flex-1 text-center cursor-pointer"
                        onClick={() => setActive('tab3')}
                    >
                        Tab 3
                    </button>
                </div>
                <div className="justify-between items-center  flex w-full p-3 bg-white rounded-xl shadow-lg ">
                    <Suspense fallback={<p>Loading...</p>}>
                        {active === 'tab1' && <Tab1 />}
                        {active === 'tab2' && <Tab2 />}
                        {active === 'tab3' && <Tab3 />}
                    </Suspense>
                </div>
            </section>
        </div>
    );
}

export default LazyTab;
