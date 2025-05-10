import React from 'react';
import { Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
       <link rel="icon" href="src\components\ui\img\logo1.png" type="image/png" />

       <Code size={28} className="text-accent" />

      <span className="font-poppins font-semibold text-lg text-text">
        <span className="text-accent">Similipal</span>Tech
      </span>
    </a>
  );
};

export default Logo;
