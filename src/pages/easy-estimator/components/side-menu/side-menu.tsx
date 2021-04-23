import { useTranslation } from 'react-i18next';
import './side-menu.scss';

export interface SideMenuProps {
  active: string;
  setActive: (link: string) => void;
  onMenuLinkClick?: (clickedValue: string) => void;
}

export function SideMenu(props: SideMenuProps) {
  const { t } = useTranslation();
  const { active, setActive } = props;

  return (
    <div className="navigation-menu">
      <div
        onClick={() => {
          setActive('information');
        }}
        className={`${active === 'information' ? 'isActive' : ''}`}
      >
        {t('NavigationMenu.Information')}
      </div>
      <div
        onClick={() => {
          setActive('material');
        }}
        className={`${active === 'material' ? 'isActive' : ''}`}
      >
        {t('NavigationMenu.Material')}
      </div>
      <div
        className={`${active === 'color' ? 'isActive' : ''}`}
        onClick={() => {
          setActive('color');
        }}
      >
        {t('NavigationMenu.Color')}
      </div>
      <div
        onClick={() => {
          setActive('countertop');
        }}
        className={`${active === 'countertop' ? 'isActive' : ''}`}
      >
        {t('NavigationMenu.DefineCountertop')}
      </div>
    </div>
  );
}

export default SideMenu;
