import PillNav from "./ui/PillNav";

export default function NavBar({ items }) {
    return (
        <div>
            <PillNav
                items={items}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#FFFFFF1A"
                pillColor="#00000000"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#ffffff"
            />
        </div>
    )
}