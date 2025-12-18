import './layout.css';
type LayoutProps = {
    children: React.ReactNode
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="layout">
            {children}
            Ola do Layout
        </main>
    )
}