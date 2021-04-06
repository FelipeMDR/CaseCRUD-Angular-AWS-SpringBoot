package com.caseCRUD.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;

import com.caseCRUD.entity.Lista;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ListaRepository {
    
    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Lista save(Lista lista) {
        dynamoDBMapper.save(lista);
        return lista;
    }	
    
    public List<Lista> findAll() {	
    	return dynamoDBMapper.scan(Lista.class, new DynamoDBScanExpression());
    }
    
    public Lista getListaById(String ID){
        return dynamoDBMapper.load(Lista.class, ID);
    }

    public String delete(String ID) {
        Lista lis = dynamoDBMapper.load(Lista.class, ID);
        dynamoDBMapper.delete(lis);
        return "Tarefa Deletada!";
    }

    public String update(String ID, Lista lista){
        dynamoDBMapper.save(lista, 
            new DynamoDBSaveExpression()
            .withExpectedEntry( "ID",
                new ExpectedAttributeValue(
                    new AttributeValue().withS(ID)
                )));
        return ID;
    }

}
