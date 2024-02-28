const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="header-container mt-20">{children}</div>
);

const Description = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-light">{children}</p>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

PageTitle.Description = Description;
PageTitle.Title = Title;

export default PageTitle;
