import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t } = useTranslation();

  const navItems = [
    { key: 'experience', label: t('nav.experience') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <div className="flex items-center space-x-8">
      {navItems.map((item) => (
        <motion.a
          key={item.key}
          href={`#${item.key}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
        >
          {item.label}
        </motion.a>
      ))}
    </div>
  );
};

export default Navbar;
