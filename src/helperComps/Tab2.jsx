function Tab2() {
    console.log('Tab2 Loaded');
    return (
        <h2>
            When the user clicks a tab for the first time, only then its content
            gets loaded or rendered. This helps reduce the initial load time of
            the page because the browser doesn’t have to process everything at
            once.
        </h2>
    );
}

export default Tab2;
