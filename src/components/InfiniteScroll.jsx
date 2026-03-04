import { useEffect, useState, useRef } from 'react';

function InfiniteScroll() {
    // ! Using OnScroll
    const [items, setItems] = useState([]); //items state to store list
    const [page, setPage] = useState(1); // page state to track current page
    // * const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const fetchData = () => {
        setLoading(true);
        // * if (loading || !hasMore) return; // prevent extra calls
        console.log('Fetching page:', page);
        // function to generate dummy data per page
        const newItems = Array.from(
            { length: 10 },
            (_, i) => `Item ${(page - 1) * 10 + i + 1}`,
        );

        setItems((prev) => [...prev, ...newItems]); // append new data

        // *if (items.length > 100) {  // stop condition
        // *   setHasMore(false);
        // *}

        setLoading(false);
    };

    useEffect(() => {
        fetchData(); // to call fetchData when page changes
    }, [page]);

    const containerRef = useRef(null); // NEW

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            if (
                container.scrollTop + container.clientHeight >=
                container.scrollHeight - 10
            ) {
                setPage((prev) => prev + 1);
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => container.removeEventListener('scroll', handleScroll);
    }, []);
    // ! Using OnScroll

    // ! Using IntersectionObserver
    const [items1, setItems1] = useState([]);
    const [page1, setPage1] = useState(1);
    const [loading1, setLoading1] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchData1 = () => {
        if (loading1 || !hasMore) return;

        setLoading1(true);

        const newItems1 = Array.from(
            { length: 10 },
            (_, i) => `Item ${(page1 - 1) * 10 + i + 1}`,
        );

        setItems1((prev) => [...prev, ...newItems1]);

        if (newItems1.length < 10) {
            setHasMore(false);
        }

        setLoading1(false);
    };
    useEffect(() => {
        fetchData1();
    }, [page1]);

    const loaderRef = useRef(null);

    useEffect(() => {
        if (!hasMore) return;
        if (items1.length === 0) return; // wait until first data loads
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading1) {
                    setPage1((prev) => prev + 1);
                }
            },
            {
                root: containerRef1.current,
                threshold: 1, // fully visible
            },
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [loading1, hasMore]);

    const containerRef1 = useRef(null); // NEW

    useEffect(() => {
        const container1 = containerRef1.current;

        const handleScroll1 = () => {
            if (
                container1.scrollTop + container1.clientHeight >=
                container1.scrollHeight - 10
            ) {
                setPage1((prev) => prev + 1);
            }
        };

        container1.addEventListener('scroll', handleScroll1);

        return () => container1.removeEventListener('scroll', handleScroll1);
    }, []);

    // ! Using IntersectionObserver
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (
    //             window.innerHeight + window.scrollY >=
    //             document.body.offsetHeight - 100
    //         ) {
    //             setPage((prev) => prev + 1); // increase page
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold text-center">
                Infinite Scrolling
            </h1>
            <div className="flex  flex-col md:flex-row gap-5">
                <div className="relative w-[400px] my-4 bg-white p-6 rounded-xl shadow-lg space-y-3">
                    <h1 className="text-2xl font-bold text-center">
                        Using onScroll
                    </h1>

                    <div
                        className=" border max-h-60 h-60 overflow-y-scroll "
                        ref={containerRef}
                    >
                        {items.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className="relative w-[400px] my-4 bg-white p-6 rounded-xl shadow-lg space-y-3">
                    <h1 className="text-2xl font-bold text-center">
                        Using IntersectionObserver
                    </h1>
                    <div
                        className=" border max-h-60 h-60 overflow-y-scroll"
                        ref={containerRef1}
                    >
                        {items1.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}

                        {hasMore && (
                            <div
                                ref={loaderRef}
                                style={{ height: '40px', color: 'red' }}
                            >
                                Loading...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfiniteScroll;
