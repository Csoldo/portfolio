<?php

namespace App\Repository;

use App\Entity\StaticTextHungarian;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<StaticTextHungarian>
 *
 * @method StaticTextHungarian|null find($id, $lockMode = null, $lockVersion = null)
 * @method StaticTextHungarian|null findOneBy(array $criteria, array $orderBy = null)
 * @method StaticTextHungarian[]    findAll()
 * @method StaticTextHungarian[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StaticTextHungarianRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StaticTextHungarian::class);
    }

//    /**
//     * @return StaticTextHungarian[] Returns an array of StaticTextHungarian objects
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

//    public function findOneBySomeField($value): ?StaticTextHungarian
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
