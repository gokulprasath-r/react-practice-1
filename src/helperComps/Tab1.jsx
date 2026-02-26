function Tab1() {
    console.log('Tab1 Loaded');
    return (
        <h2>
            Lazy loading in tabs means the content inside a tab is not loaded
            immediately when the page opens. Only the default active tab loads
            first. The other tabs stay empty until the user clicks on them.
        </h2>
    );
}

export default Tab1;
