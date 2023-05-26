import Image from 'next/image';

const PageLoader = () => {
    return (
    <div style={{   width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2D31'
    }}>
        <Image src="/loading.svg" alt="Loading" width={120} height={120} />
    </div>
    );
  };
  
export default PageLoader;