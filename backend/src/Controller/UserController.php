<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Entity\User;
use App\UserSecurity;


class UserController extends AbstractController
{
    private UserPasswordHasherInterface $passwordHasher;
    private ManagerRegistry $managerRegistry;
    private UserSecurity $security;
    private UserRepository $userRepository;

    public function __construct(
        UserPasswordHasherInterface $passwordHasher,
        ManagerRegistry $managerRegistry,
        UserSecurity $security,
        UserRepository $userRepository,
    ) {
        $this->passwordHasher = $passwordHasher;
        $this->managerRegistry = $managerRegistry;
        $this->security = $security;
        $this->userRepository = $userRepository;
    }

    public function register(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['email']) || !isset($data['password']) || !isset($data['confirmPassword'])) {
            return new JsonResponse(null, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $email = $data['email'];
        $password = $data['password'];
        $confirmPassword = $data['confirmPassword'];

        if ($password != $confirmPassword) {
            return new JsonResponse(['xd' => 'xd'], Response::HTTP_I_AM_A_TEAPOT);
        }

        $em = $this->managerRegistry->getManager();

        $user = new User();
        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);
        $user->setEmail($email);
        $em->persist($user);
        $em->flush();

        return new JsonResponse($user->getEmail(), Response::HTTP_CREATED);
    }

    public function createUser(string $email, string $password): void
    {
        $em = $this->managerRegistry->getManager();

        $user = new User();
        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);
        $user->setEmail($email);
        $em->persist($user);
        $em->flush();
    }

    public function changePassword(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['password']) || !isset($data['confirmPassword'])) {
            return new JsonResponse(null, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $password = $data['password'];
        $confirmPassword = $data['confirmPassword'];

        if ($password != $confirmPassword) {
            return new JsonResponse(['xd' => 'xd'], Response::HTTP_I_AM_A_TEAPOT);
        }

        $user = $this->security->getUser();

        $user->setPassword($this->passwordHasher->hashPassword($user, $password));

        $em = $this->managerRegistry->getManager();
        $em->flush();

        return new JsonResponse(null, Response::HTTP_OK);
    }

    public function logout(): JsonResponse
    {
        $this->security->logout();
        return new JsonResponse(null, Response::HTTP_OK);
    }

    public function getCurrentUser(): JsonResponse
    {
        $user = $this->security->getUser();

        $serializedUser = [
            "id" => $user->getId(),
            "email" => $user->getEmail(),
        ];
        return new JsonResponse($serializedUser, Response::HTTP_OK);
    }

    public function ping(): JsonResponse
    {
        return new JsonResponse("xd", Response::HTTP_OK);
    }
}
