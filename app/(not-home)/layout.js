import BackButton from '../(components)/BackButton';

export default function Layout({ children }) {
  return (
    <div>
        <BackButton></BackButton>
        {children}
    </div>
  );
}