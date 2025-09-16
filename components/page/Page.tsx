import { Header, Main } from '@components/layout';

export default function Page() {
  return (
    <div className='w-full h-full flex flex-col items-start justify-items-start overflow-x-hidden overflow-y-auto'>
      <Header className='page' />
      <Main className='page' />
    </div>
  );
}
