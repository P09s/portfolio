import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail } from 'lucide-react'; // Import all icons

// Create a mapping of icon IDs to their Lucide components
const iconMap = {
  github: Github,
  portfolio: Globe,
  linkedin: Linkedin,
  mail: Mail,
};

// Update the icons array to remove the now-redundant `src` property
const icons = [
  { id: "github", label: "GitHub", href: "https://github.com/P09s" },
  { id: "portfolio", label: "Website", href: "https://g.dev/parag_09" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/p09s/" },
  { id: "mail", label: "Mail", href: "mailto:sharmaparag2004@gmail.com" },
];

export default function DockFooter(){
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
      <div className="glass px-6 py-4 rounded-full flex items-end gap-6 shadow-2xl border border-white/8">
        {icons.map((ic) => (
          <DockIcon key={ic.id} icon={ic} />
        ))}
      </div>
    </div>
  );
}

function DockIcon({ icon }){
  // Get the correct icon component from the map based on the icon's id
  const IconComponent = iconMap[icon.id];

  return (
    <a href={icon.href} aria-label={icon.label}>
      {IconComponent && ( // Conditionally render the icon to avoid errors if a mapping doesn't exist
        <motion.div
          whileHover={{ scale: 1.2, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="w-10 h-10 drop-shadow-lg"
        >
          {/* Render the Lucide icon component with the desired size */}
          <IconComponent size={48} className="w-full h-full" />
        </motion.div>
      )}
    </a>
  );
}