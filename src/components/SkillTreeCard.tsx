import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  BookOpen,
  Trophy,
  Clock,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SkillNode {
  id: string;
  title: string;
  description: string;
  category: "fundamental" | "tool" | "advanced" | "project";
  icon: React.ReactNode;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  completed?: boolean;
}

interface SkillTreeCardProps {
  title: string;
  description: string;
  totalDuration: string;
  skillNodes: SkillNode[];
  className?: string;
}

const difficultyColors = {
  beginner: "bg-green-100 text-green-800 border-green-200",
  intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  advanced: "bg-red-100 text-red-800 border-red-200",
};

const categoryColors = {
  fundamental: "bg-blue-50 border-l-blue-400",
  tool: "bg-purple-50 border-l-purple-400",
  advanced: "bg-orange-50 border-l-orange-400",
  project: "bg-green-50 border-l-green-400",
};

export function SkillTreeCard({
  title,
  description,
  totalDuration,

  skillNodes,
  className = "",
}: SkillTreeCardProps) {
  return (
    <Card
      className={`w-full max-w-md mx-auto  shadow-none transition-all duration-300 ${className}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 ">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{totalDuration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            <span>{skillNodes.length} skills</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="">
        <div className="space-y-10">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Learning Path
          </h4>

          <div className="flex flex-col gap-3">
            {skillNodes.map((node, index) => (
              <div key={node.id} className="relative">
                {index < skillNodes.length - 1 && (
                  <div className="absolute left-4 top-12 w-px h-8 bg-gradient-to-b from-gray-300 to-gray-200" />
                )}

                <div
                  className={`relative p-3 rounded-lg border-l-4 ${
                    categoryColors[node.category]
                  } transition-all duration-200 hover:shadow-md`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        node.completed ? "bg-green-100" : "bg-gray-100"
                      } flex-shrink-0`}
                    >
                      {node.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      ) : (
                        <div className="text-gray-600">{node.icon}</div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-medium text-gray-900 text-sm truncate">
                          {node.title}
                        </h5>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            difficultyColors[node.difficulty]
                          }`}
                        >
                          {node.difficulty}
                        </Badge>
                      </div>

                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {node.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {node.duration}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500 capitalize">
                            {node.category}
                          </span>
                          {index < skillNodes.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-black rounded-md">
            <div className="flex items-center gap-1 mb-2 bg-white border-2 border-yellow-400 p-1.5 max-w-fit rounded-md ">
              <Zap color="blue" className="w-4 h-4 " />
              <span className="font-semibold tracking-tight text-sm ">
                AI-Powered Path
              </span>
            </div>
            <p className="text-xs tracking-tight text-muted text-balance  rounded-md ">
              Personalized roadmap generated based on industry best practices
              and current market demands.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillTreeCardExample() {
  const frontendRoadmap: SkillNode[] = [
    {
      id: "1",
      title: "HTML & CSS Basics",
      description:
        "Master semantic HTML and CSS fundamentals including flexbox and grid",
      category: "fundamental",
      icon: <Code className="w-4 h-4" />,
      duration: "2-3 weeks",
      difficulty: "beginner",
      completed: false,
    },
    {
      id: "2",
      title: "JavaScript Essentials",
      description: "Learn ES6+, DOM manipulation, and async programming",
      category: "fundamental",
      icon: <Code className="w-4 h-4" />,
      duration: "4-6 weeks",
      difficulty: "beginner",
      completed: false,
    },
    {
      id: "3",
      title: "React Framework",
      description: "Component-based development, hooks, and state management",
      category: "tool",
      icon: <Globe className="w-4 h-4" />,
      duration: "6-8 weeks",
      difficulty: "intermediate",
      completed: false,
    },
    {
      id: "4",
      title: "CSS Frameworks",
      description: "Tailwind CSS and responsive design principles",
      category: "tool",
      icon: <Palette className="w-4 h-4" />,
      duration: "2-3 weeks",
      difficulty: "intermediate",
      completed: false,
    },
    {
      id: "5",
      title: "Build Tools",
      description: "Webpack, Vite, and modern development workflow",
      category: "advanced",
      icon: <Database className="w-4 h-4" />,
      duration: "3-4 weeks",
      difficulty: "advanced",
      completed: false,
    },
    {
      id: "6",
      title: "Portfolio Project",
      description: "Create a full-stack application showcasing your skills",
      category: "project",
      icon: <Smartphone className="w-4 h-4" />,
      duration: "4-6 weeks",
      difficulty: "advanced",
      completed: false,
    },
  ];

  return (
    <SkillTreeCard
      title="Frontend Developer"
      description="Complete roadmap to become a modern frontend developer"
      totalDuration="5-7 months"
      skillNodes={frontendRoadmap}
    />
  );
}
