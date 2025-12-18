import './pageContentLayout.css';

type PageContentLayoutProps = {
  children: React.ReactNode
};

export const PageContentLayout = ({ children }: PageContentLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}