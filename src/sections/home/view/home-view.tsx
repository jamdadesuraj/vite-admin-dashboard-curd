import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

// ----------------------------------------------------------------------

// type StyledPolygonProps = {
//   anchor?: 'top' | 'bottom';
// };

// const StyledPolygon = styled('div')<StyledPolygonProps>(({ anchor = 'top', theme }) => ({
//   left: 0,
//   zIndex: 9,
//   height: 80,
//   width: '100%',
//   position: 'absolute',
//   clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
//   backgroundColor: theme.palette.background.default,
//   display: 'block',
//   lineHeight: 0,
//   ...(anchor === 'top' && {
//     top: -1,
//     transform: 'scale(-1, -1)',
//   }),
//   ...(anchor === 'bottom' && {
//     bottom: -1,
//     backgroundColor: theme.palette.grey[900],
//   }),
// }));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      {/* <HomeHero /> */}
      <h1>dddd</h1>
    </>
  );
}
