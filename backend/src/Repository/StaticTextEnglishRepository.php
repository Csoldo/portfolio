<?php

namespace App\Repository;

use App\Entity\StaticTextEnglish;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<StaticTextEnglish>
 *
 * @method StaticTextEnglish|null find($id, $lockMode = null, $lockVersion = null)
 * @method StaticTextEnglish|null findOneBy(array $criteria, array $orderBy = null)
 * @method StaticTextEnglish[]    findAll()
 * @method StaticTextEnglish[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StaticTextEnglishRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StaticTextEnglish::class);
    }

//    /**
//     * @return StaticTextEnglish[] Returns an array of StaticTextEnglish objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?StaticTextEnglish
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
