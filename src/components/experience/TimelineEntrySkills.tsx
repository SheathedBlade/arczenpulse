interface TimelineEntrySkillsProps {
  skills: string[];
  isExpanded: boolean;
}

const TimelineEntrySkills = ({
  skills,
  isExpanded
}: TimelineEntrySkillsProps) => {
  if (skills.length === 0) return null;

  if (isExpanded) {
    return (
      <div className="flex flex-wrap gap-1.5 pt-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="bg-sakura-bg font-dmmono text-sakura-cobble border-sakura-stone/30 rounded-sm border px-2 py-0.5 text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {skills.slice(0, 4).map(skill => (
        <span key={skill} className="font-dmmono text-sakura-stone/70 text-xs">
          {skill}
        </span>
      ))}
      {skills.length > 4 && (
        <span className="font-dmmono text-sakura-stone/50 text-xs">
          +{skills.length - 4}
        </span>
      )}
    </div>
  );
};

export default TimelineEntrySkills;
