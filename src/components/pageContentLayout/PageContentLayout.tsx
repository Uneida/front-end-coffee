import './pageContentLayout.css';

type PageContentLayoutProps = {
  children: React.ReactNode
};

export const PageContentLayout = ({ children }: PageContentLayoutProps) => {
  return (
    <div className='page-content-layout'>
      {children}
    </div>
  )
}