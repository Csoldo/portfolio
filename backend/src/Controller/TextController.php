<?php

namespace App\Controller;

use App\Factory\StaticTextFactory;
use App\Repository\StaticTextEnglishRepository;
use App\Repository\StaticTextHungarianRepository;
use App\Serializer\StaticTextSerializer;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TextController
{
    private StaticTextEnglishRepository $englishTextRepository;
    private StaticTextHungarianRepository $hungarianTextRepository;
    private StaticTextSerializer $textSerializer;
    private StaticTextFactory $textFactory;

    public function __construct(
        StaticTextEnglishRepository $englishTextRepository,
        StaticTextHungarianRepository $hungarianTextRepository,
        StaticTextSerializer $textSerializer,
        StaticTextFactory $textFactory,
    ) {
        $this->englishTextRepository = $englishTextRepository;
        $this->hungarianTextRepository = $hungarianTextRepository;
        $this->textSerializer = $textSerializer;
        $this->textFactory = $textFactory;
    }

    public function getAllTexts(Request $request): JsonResponse
    {
        $language = $request->query->get('language');
        if (!$language) {
            $language = 'en';
        }
        $texts = [];
        switch ($language) {
            case 'en':
                $texts = $this->englishTextRepository->findAll();
                break;
            case 'hu':
                $texts = $this->hungarianTextRepository->findAll();
                break;
            default:
                return new JsonResponse("Invalid language", JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        $serialized = $this->textSerializer->serializeTexts($texts);
        return new JsonResponse($serialized, JsonResponse::HTTP_OK);
    }

    public function createText(Request $request): JsonResponse
    {
        $requestBody = json_decode($request->getContent(), true);
        if (!isset($requestBody['contentKey']) || !isset($requestBody['text']) || !isset($requestBody['language'])) {
            return new JsonResponse(null, JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        $contentKey = $requestBody['contentKey'];
        $text = $requestBody['text'];
        $language = $requestBody['language'];

        if (!$contentKey || !$text || !$language || !in_array($language, ['en', 'hu'])) {
            return new JsonResponse(null, JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        $this->textFactory->create($contentKey, $text, $language);
        return new JsonResponse(null, JsonResponse::HTTP_CREATED);
    }
}