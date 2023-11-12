<?php

namespace App\Factory;

use App\Entity\StaticTextEnglish;
use App\Entity\StaticTextHungarian;
use App\Repository\StaticTextEnglishRepository;
use App\Repository\StaticTextHungarianRepository;
use App\TextContentInterface;
use Doctrine\ORM\EntityManagerInterface;

class StaticTextFactory
{
    private EntityManagerInterface $em;
    private StaticTextEnglishRepository $englishTextRepository;
    private StaticTextHungarianRepository $hungarianTextRepository;

    public function __construct(
        EntityManagerInterface $em,
        StaticTextEnglishRepository $englishTextRepository,
        StaticTextHungarianRepository $hungarianTextRepository,
    ) {
        $this->em = $em;
        $this->englishTextRepository = $englishTextRepository;
        $this->hungarianTextRepository = $hungarianTextRepository;
    }

    public function create(string $contentKey, string $text, string $language): TextContentInterface
    {
        $textEntity = null;
        if ($language == "en") {
            $textEntity = new StaticTextEnglish();
        } else if ($language == "hu") {
            $textEntity = new StaticTextHungarian();
        } else {
            throw new \Exception("Invalid language");
        }

        $textEntity->setContentKey($contentKey);
        $textEntity->setText($text);

        $this->em->persist($textEntity);
        $this->em->flush();
        return $textEntity;
    }
}