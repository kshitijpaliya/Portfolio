import { notFound } from 'next/navigation';
import { portfolioData } from '@/lib/portfolioData';
import ProjectPageClient from './ProjectPageClient';

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: 'Mission not found - Kshitij Paliya',
    };
  }

  return {
    title: `${project.name} - Kshitij Paliya`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} - Kshitij Paliya`,
      description: project.tagline,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
