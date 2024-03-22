import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Github, X } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'displayStarUsOnGitHub';

const StarUsOnGitHub = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Check if the user has already clicked the button
    const displayStarUsOnGitHub = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (displayStarUsOnGitHub !== 'false') {
      setIsHidden(false);
    }
  }, []);

  const handleCloseClick = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'false');
    setIsHidden(true);
  };

  if (isHidden) return null;

  return (
    <div className='fixed bottom-[25px] z-[9999] left-0 right-0 flex items-center justify-center'>
      <div className='flex items-center justify-center gap-2 p-2 text-white rounded-lg bg-primary w-fit'>
        <div className='flex gap-2'>
          <Button className='flex items-center justify-center gap-2' asChild>
            <a href='https://github.com/elranu/llavero' target='_blank'>
              Star us on GitHub <Github />
            </a>
          </Button>
          <Button
            onClick={() => {
              handleCloseClick();
            }}
            variant='secondary'
            size='icon'
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StarUsOnGitHub;
