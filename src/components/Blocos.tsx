import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Blocos(props: Props){
  return (
    <main className="Blocos">
      {props.children}
    </main>
  )
}

export default Blocos